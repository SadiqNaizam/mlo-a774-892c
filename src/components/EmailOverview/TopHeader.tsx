import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {
  Menu,
  Search,
  Save,
  Archive,
  Bell,
  Settings,
  HelpCircle,
  CalendarDays,
  Undo2,
  Redo2,
  Cloud,
  Briefcase
} from 'lucide-react';

const TopHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b bg-background px-4">
      <div className="flex items-center gap-4">
        <div className="font-bold text-lg tracking-wider text-foreground">ASCENDION</div>
        <Separator orientation="vertical" className="h-6" />
        <nav className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="h-8">Home</Button>
          <Button variant="ghost" size="sm" className="h-8">View</Button>
          <Button variant="ghost" size="sm" className="h-8">Help</Button>
        </nav>
      </div>

      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search" className="pl-10 h-9 bg-input" />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon"><Save className="h-5 w-5" /></Button>
            </TooltipTrigger>
            <TooltipContent><p>Save</p></TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon"><Undo2 className="h-5 w-5" /></Button>
            </TooltipTrigger>
            <TooltipContent><p>Undo</p></TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon"><Redo2 className="h-5 w-5" /></Button>
            </TooltipTrigger>
            <TooltipContent><p>Redo</p></TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Separator orientation="vertical" className="h-6 mx-2" />
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
        
        <div className="flex items-center text-sm ml-4">
            <CalendarDays className="h-4 w-4 mr-2 text-muted-foreground" />
            <div>
                <p className="font-medium">CRM - collab call</p>
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

export default TopHeader;
