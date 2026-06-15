import fs from 'fs';
import path from 'path';
import MarkdownRenderer from './MarkdownRenderer';
import styles from './reference.module.css';

export const metadata = {
  title: 'Reference',
};

export default function ReferencePage() {
  const filePath = path.join(process.cwd(), 'src', 'app', 'REFERENCE.md');
  const content = fs.readFileSync(filePath, 'utf8');

  return (
    <div className={styles.page}>
      <MarkdownRenderer content={content} />
    </div>
  );
}
