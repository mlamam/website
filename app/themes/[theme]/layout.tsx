
import { generateStaticParams } from './themeUtils';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

export { generateStaticParams };