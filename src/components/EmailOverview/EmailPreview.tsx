import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { 
  Reply, 
  ReplyAll, 
  Forward, 
  Archive, 
  Trash2, 
  ChevronDown, 
  Zap, 
  MailOpen, 
  Tag, 
  Flag, 
  Clock, 
  MoreVertical, 
  AlertCircle, 
  Sun, 
  Smile, 
  Users, 
  Printer, 
  AppWindow, 
  PenSquare 
} from 'lucide-react';

const ActionButton: React.FC<{ icon: React.ElementType; label: string; withDropdown?: boolean }> = ({ icon: Icon, label, withDropdown = false }) => (
  <Button variant="ghost" className="flex items-center gap-1.5 px-3">
    <Icon className="h-4 w-4" />
    <span>{label}</span>
    {withDropdown && <ChevronDown className="h-4 w-4" />}
  </Button>
);

const EmailPreview: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-background">
      <div className="p-4 border-b border-border">
        <h1 className="text-2xl font-semibold text-foreground">We've updated our Terms of Service</h1>
      </div>

      <div className="flex items-center justify-between p-2 border-b border-border flex-wrap gap-2">
        <div className="flex items-center gap-1 flex-wrap">
          <ActionButton icon={Reply} label="Reply" />
          <ActionButton icon={ReplyAll} label="Reply all" />
          <ActionButton icon={Forward} label="Forward" />
        </div>
        <div className="flex items-center gap-1 flex-wrap">
          <TooltipProvider>
            <Tooltip><TooltipTrigger asChild><Button variant="ghost" size="icon"><Archive className="h-4 w-4"/></Button></TooltipTrigger><TooltipContent><p>Archive</p></TooltipContent></Tooltip>
            <Tooltip><TooltipTrigger asChild><Button variant="ghost" size="icon"><Trash2 className="h-4 w-4"/></Button></TooltipTrigger><TooltipContent><p>Delete</p></TooltipContent></Tooltip>
          </TooltipProvider>
          <Separator orientation="vertical" className="h-6 mx-1" />
          <ActionButton icon={Zap} label="Quick steps" withDropdown />
          <ActionButton icon={MailOpen} label="Read / Unread" withDropdown />
          <Separator orientation="vertical" className="h-6 mx-1" />
          <TooltipProvider>
            <Tooltip><TooltipTrigger asChild><Button variant="ghost" size="icon"><Tag className="h-4 w-4"/></Button></TooltipTrigger><TooltipContent><p>Categorize</p></TooltipContent></Tooltip>
            <Tooltip><TooltipTrigger asChild><Button variant="ghost" size="icon"><Flag className="h-4 w-4"/></Button></TooltipTrigger><TooltipContent><p>Follow up</p></TooltipContent></Tooltip>
          </TooltipProvider>
          <DropdownMenu>
            <DropdownMenuTrigger asChild><Button variant="ghost" size="icon"><MoreVertical className="h-4 w-4" /></Button></DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem><Clock className="mr-2 h-4 w-4"/>Snooze</DropdownMenuItem>
              <DropdownMenuItem><Users className="mr-2 h-4 w-4"/>Share to Teams</DropdownMenuItem>
              <DropdownMenuItem><Printer className="mr-2 h-4 w-4"/>Print</DropdownMenuItem>
              <DropdownMenuItem><AppWindow className="mr-2 h-4 w-4"/>Open in new window</DropdownMenuItem>
              <DropdownMenuItem><PenSquare className="mr-2 h-4 w-4"/>Add to notes</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <div className="flex items-start gap-4">
          <Avatar className="h-12 w-12">
            <AvatarFallback className="bg-red-500 text-white text-xl">F</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex justify-between items-start">
                <div>
                    <p className="font-semibold text-foreground">Figma <span className="font-normal text-muted-foreground">&lt;announcements@figma.com&gt;</span></p>
                    <p className="text-sm text-muted-foreground">To: Raghuram Pathmanaban</p>
                </div>
                <div className="text-right text-sm text-muted-foreground whitespace-nowrap">
                    <div className="flex items-center gap-3">
                        <TooltipProvider>
                            <Tooltip><TooltipTrigger asChild><Button variant="ghost" size="icon" className="h-6 w-6"><Sun className="h-4 w-4"/></Button></TooltipTrigger><TooltipContent><p>Light theme</p></TooltipContent></Tooltip>
                            <Tooltip><TooltipTrigger asChild><Button variant="ghost" size="icon" className="h-6 w-6"><Smile className="h-4 w-4"/></Button></TooltipTrigger><TooltipContent><p>React</p></TooltipContent></Tooltip>
                            <Tooltip><TooltipTrigger asChild><Button variant="ghost" size="icon" className="h-6 w-6"><Reply className="h-4 w-4"/></Button></TooltipTrigger><TooltipContent><p>Reply</p></TooltipContent></Tooltip>
                            <Tooltip><TooltipTrigger asChild><Button variant="ghost" size="icon" className="h-6 w-6"><ReplyAll className="h-4 w-4"/></Button></TooltipTrigger><TooltipContent><p>Reply All</p></TooltipContent></Tooltip>
                            <Tooltip><TooltipTrigger asChild><Button variant="ghost" size="icon" className="h-6 w-6"><Forward className="h-4 w-4"/></Button></TooltipTrigger><TooltipContent><p>Forward</p></TooltipContent></Tooltip>
                            <Tooltip><TooltipTrigger asChild><Button variant="ghost" size="icon" className="h-6 w-6"><MoreVertical className="h-4 w-4"/></Button></TooltipTrigger><TooltipContent><p>More actions</p></TooltipContent></Tooltip>
                        </TooltipProvider>
                    </div>
                    <p className="mt-1">Tue 6/24/2025 4:33 AM</p>
                </div>
            </div>
          </div>
        </div>

        <Alert variant="default" className="bg-accent">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="flex justify-between items-center w-full">
            Some content in this message has been blocked because the sender isn't in your Safe senders list.
            <div>
                <Button variant="outline" size="sm" className="mr-2">Trust sender</Button>
                <Button variant="outline" size="sm">Show blocked content</Button>
            </div>
            </AlertDescription>
        </Alert>

        <div className="border-l-4 border-destructive pl-4 py-2 bg-destructive/10">
            <p className="font-semibold text-destructive-foreground">CAUTION:- External Mail.</p>
        </div>

        <div className="prose prose-invert max-w-none text-foreground/90">
          <p className="text-lg">Hi there,</p>
          <p>We're reaching out to let you know we're updating <strong className="text-foreground">Figma's Terms of Service</strong> for our Starter and Professional plans. We do this regularly to ensure these terms are clear and cover the growing list of products, features, and services available to you as a Figma user. We've also updated our terms to stay current with applicable laws and regulations and to add clarity where we believe it would be useful.</p>
          <p>You can currently view both the existing and new Terms of Service <a href="#" className="text-blue-400 underline">here</a>, and we encourage you to do so.</p>
          <p>These updated Terms of Service go into effect on <strong className="text-foreground">July 29, 2025</strong>—by keeping your Figma account after that date you agree to these updated terms.</p>
          <p>Thanks,</p>
          <p>The Figma Team</p>
        </div>
      </div>
    </div>
  );
};

export default EmailPreview;
