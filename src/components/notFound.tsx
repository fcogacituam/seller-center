import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export function NotFound() {
  const t = useTranslations('notFound');
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="space-y-6 max-w-md">
        <h1 className="text-9xl font-extrabold text-primary">404</h1>

        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">{t('title')}</h2>
          <p className="text-muted-foreground">{t('description')}</p>
        </div>

        <div className="pt-4">
          <Button asChild>
            <Link href="/home" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              <span>{t('back')}</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
