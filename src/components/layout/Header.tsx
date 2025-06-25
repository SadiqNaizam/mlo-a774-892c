import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {
  Search,
  Save,
  Bell,
  Settings,
  HelpCircle,
  CalendarDays,
  Undo2,
  Redo2,
} from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b bg-background px-4 shrink-0">
      <div className="flex items-center gap-4">
        <div className="font-bold text-lg tracking-wider text-foreground">ASCENDION</div>
        <Separator orientation="vertical" className="h-6" />
        <nav className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm" className="h-8">Home</Button>
          <Button variant="ghost" size="sm" className="h-8">View</Button>
          <Button variant="ghost" size="sm" className="h-8">Help</Button>
        </nav>
      </div>

      <div className="flex-1 max-w-md mx-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search" className="pl-10 h-9 bg-input" />
        </div>
      </div>

      <div className="flex items-center gap-1.5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="hidden lg:inline-flex"><Save className="h-5 w-5" /></Button>
            </TooltipTrigger>
            <TooltipContent><p>Save</p></TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="hidden lg:inline-flex"><Undo2 className="h-5 w-5" /></Button>
            </TooltipTrigger>
            <TooltipContent><p>Undo</p></TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="hidden lg:inline-flex"><Redo2 className="h-5 w-5" /></Button>
            </TooltipTrigger>
            <TooltipContent><p>Redo</p></TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Separator orientation="vertical" className="h-6 mx-2 hidden lg:block" />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon"><Bell className="h-5 w-5" /></Button>
            </TooltipTrigger>
            <TooltipContent><p>Notifications</p></TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon"><Settings className="h-5 w-5" /></Button>
            </TooltipTrigger>
            <TooltipContent><p>Settings</p></TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon"><HelpCircle className="h-5 w-5" /></Button>
            </TooltipTrigger>
            <TooltipContent><p>Help</p></TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <div className="hidden items-center text-sm ml-4 xl:flex">
            <CalendarDays className="h-4 w-4 mr-2 text-muted-foreground" />
            <div>
                <p className="font-medium whitespace-nowrap">CRM - collab call</p>
                <p className="text-xs text-muted-foreground">Tomorrow 11:00 AM</p>
            </div>
        </div>

        <Avatar className="ml-4 h-8 w-8">
          <AvatarFallback className="bg-muted text-muted-foreground">RP</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
