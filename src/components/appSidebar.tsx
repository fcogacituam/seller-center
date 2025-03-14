'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  Home,
  Settings,
  HelpCircle,
  Menu,
  ChevronLeft,
  Package,
  ShoppingCart,
  Boxes,
  Wrench,
  Banknote,
  BarChart3,
  Megaphone,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';
import Logo, { LogoVariant } from './logo';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export function Sidebar() {
  const pathname = usePathname();
  const t = useTranslations('sidebar');
  const locale = useLocale();

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navigation: NavigationItem[] = [
    { name: t('home'), href: '/home', icon: Home },
    { name: t('products'), href: '/products', icon: Package },
    { name: t('sales'), href: '/sales', icon: ShoppingCart },
    { name: t('stock'), href: '/stock', icon: Boxes },
    { name: t('afterSales'), href: '/afterSales', icon: Wrench },
    { name: t('finance'), href: '/finance', icon: Banknote },
    { name: t('metrics'), href: '/metrics', icon: BarChart3 },
    { name: t('campaigns'), href: '/campaigns', icon: Megaphone },
  ];

  const bottomNavigation: NavigationItem[] = [
    { name: t('settings'), href: '/settings', icon: Settings },
    { name: t('help'), href: '/help', icon: HelpCircle },
  ];
  const NavItem = ({ item }: { item: NavigationItem }) => (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <Link
          href={item.href}
          className={cn(
            'flex items-center rounded-md px-3 py-2 text-xs font-light transition-colors',
            pathname === `/${locale}${item.href}`
              ? 'bg-secondary text-neutral-200'
              : 'text-neutral-200 hover:bg-secondary hover:text-secondary-foreground',
            isCollapsed && 'justify-center px-2',
          )}
        >
          <item.icon className={cn('h-4 w-4', !isCollapsed && 'mr-3')} />
          {!isCollapsed && <span>{item.name}</span>}
        </Link>
      </TooltipTrigger>
      {isCollapsed && (
        <TooltipContent side="right" className="flex items-center gap-4">
          {item.name}
        </TooltipContent>
      )}
    </Tooltip>
  );

  return (
    <TooltipProvider>
      <>
        <button
          className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-background rounded-md shadow-md"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle sidebar"
        >
          <Menu className="h-6 w-6" />
        </button>
        <div
          className={cn(
            'fixed inset-y-0 z-20 flex flex-col bg-blue-500  transition-all duration-300 ease-in-out lg:static',
            isCollapsed ? 'w-[72px]' : 'w-72',
            isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
          )}
        >
          <div className="border-b border-border">
            <div
              className={cn(
                'flex h-16 items-center gap-2 px-4',
                isCollapsed && 'justify-center px-2',
              )}
            >
              {!isCollapsed && (
                <Link href="/" className="flex items-center font-semibold">
                  <Logo variant={LogoVariant.ISO} width={30} />
                </Link>
              )}
              <Button
                variant="ghost"
                size="sm"
                className={cn('ml-auto h-8 w-8', isCollapsed && 'ml-0')}
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                <ChevronLeft
                  className={cn('h-4 w-4 transition-transform', isCollapsed && 'rotate-180')}
                />
                <span className="sr-only">{isCollapsed ? 'Expand' : 'Collapse'} Sidebar</span>
              </Button>
            </div>
          </div>
          <div className="flex-1 overflow-auto">
            <nav className="flex-1 space-y-1 px-2 py-4">
              {navigation.map((item) => (
                <NavItem key={item.name} item={item} />
              ))}
            </nav>
          </div>
          <div className="border-t border-border p-2">
            <nav className="space-y-1">
              {bottomNavigation.map((item) => (
                <NavItem key={item.name} item={item} />
              ))}
            </nav>
          </div>
        </div>
      </>
    </TooltipProvider>
  );
}
