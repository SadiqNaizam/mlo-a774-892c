import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { MailPlus, Inbox, Send, FileText, Trash2, Archive, StickyNote, Rss, Search, Users, ChevronDown } from 'lucide-react';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  count?: number;
  isActive?: boolean;
  isPrimary?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, count, isActive, isPrimary = false }) => {
  return (
    <a
      href="#"
      className={cn(
        'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
        isActive
          ? isPrimary ? 'bg-sidebar-primary text-sidebar-primary-foreground' : 'bg-sidebar-accent text-sidebar-accent-foreground'
          : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
      )}
    >
      <Icon className="h-4 w-4" />
      <span className="flex-1 truncate">{label}</span>
      {count && (
        <Badge
          variant={isActive ? 'default' : 'secondary'}
          className={cn(
            'ml-auto',
             isActive && isPrimary ? 'bg-sidebar-primary-foreground text-sidebar-primary' : 'bg-sidebar-accent text-sidebar-foreground'
          )}
        >
          {count}
        </Badge>
      )}
    </a>
  );
};

interface NavSectionProps {
    title: string;
    items: Omit<NavItemProps, 'isActive' | 'isPrimary'>[];
    activeItem: string;
    isPrimaryAccount?: boolean;
}

const NavSection: React.FC<NavSectionProps> = ({ title, items, activeItem, isPrimaryAccount = false }) => (
    <div>
        <div className="flex items-center px-3 py-2">
            <ChevronDown className="h-4 w-4 mr-2" />
            <h2 className="flex-1 text-sm font-semibold tracking-tight text-sidebar-foreground">{title}</h2>
        </div>
        <div className="space-y-1">
            {items.map((item) => (
                <NavItem key={item.label} {...item} isActive={activeItem === item.label} isPrimary={isPrimaryAccount && activeItem === item.label} />
            ))}
        </div>
    </div>
);

const SidebarNav: React.FC = () => {
  const [activeItem, setActiveItem] = React.useState('Inbox');

  const favoritesNavItems = [
    { icon: Inbox, label: 'Inbox', count: 2 },
    { icon: Send, label: 'Sent Items' },
    { icon: FileText, label: 'Drafts', count: 4 },
    { icon: Trash2, label: 'Deleted Items', count: 28 },
  ];

  const accountNavItems = [
    { icon: Inbox, label: 'Inbox', count: 2 },
    { icon: FileText, label: 'Drafts', count: 4 },
    { icon: Send, label: 'Sent Items' },
    { icon: Trash2, label: 'Deleted Items', count: 28 },
    { icon: Archive, label: 'Junk Email' },
    { icon: StickyNote, label: 'Notes', count: 2 },
    { icon: Archive, label: 'Archive' },
    { icon: FileText, label: 'Conversation History' },
    { icon: Rss, label: 'RSS Feeds' },
    { icon: Search, label: 'Search Folders' },
    { icon: Users, label: 'Go to Groups' },
  ];

  return (
    <aside className="w-64 flex flex-col bg-sidebar text-sidebar-foreground p-2 border-r border-sidebar-border">
      <div className="p-2">
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          <MailPlus className="mr-2 h-4 w-4" /> New mail
        </Button>
      </div>
      <nav className="flex-1 space-y-2 px-2">
        <NavSection title="Favorites" items={favoritesNavItems} activeItem={activeItem} />
        <NavSection title="raghuram.pathmanaba..." items={accountNavItems} activeItem={activeItem} isPrimaryAccount={true} />
      </nav>
    </aside>
  );
};

export default SidebarNav;
