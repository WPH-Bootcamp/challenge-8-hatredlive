import os
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TARGET_EXTS = {'.ts', '.tsx', '.js', '.jsx', '.css', '.html', '.env', '.gitignore', '.json', '.template.js'}
EXCLUDE_FILES = {'README.md'}

modified = []

for path in ROOT.rglob('*'):
    if path.is_file():
        rel = path.relative_to(ROOT)
        if rel.name in EXCLUDE_FILES:
            continue
        ext = path.suffix.lower()
        # allow template.js as suffix .js but also match .template.js by name
        if ext in TARGET_EXTS or rel.name.endswith('.template.js'):
            try:
                text = path.read_text(encoding='utf-8')
            except Exception:
                continue

            original = text

            # Remove block comments /* ... */
            text = re.sub(r'/\*[\s\S]*?\*/', '', text)

            # Remove full-line // comments
            text = re.sub(r'(?m)^\s*//.*\n?', '', text)

            # Remove HTML comments <!-- ... -->
            text = re.sub(r'<!--([\s\S]*?)-->', '', text)

            # Remove lines starting with # (for .env, .gitignore)
            text = re.sub(r'(?m)^\s*#.*\n?', '', text)

            # Trim excessive blank lines (more than 2)
            text = re.sub(r'\n{3,}', '\n\n', text)

            if text != original:
                bak = path.with_suffix(path.suffix + '.bak')
                try:
                    path.rename(bak)
                    bak.write_text(original, encoding='utf-8')
                except Exception:
                    # if rename fails, write backup separately
                    path.with_suffix(path.suffix + '.bak').write_text(original, encoding='utf-8')
                path.write_text(text, encoding='utf-8')
                modified.append(str(rel))

print('Modified files:')
for m in modified:
    print(m)
print(f'Total modified: {len(modified)}')
