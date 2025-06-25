import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ArrowDownUp, Mail, Archive, Trash2 } from 'lucide-react';

interface Email {
  id: string;
  sender: string;
  initials: string;
  avatarColor: string;
  subject: string;
  preview: string;
  time: string;
  date: string;
  isRead: boolean;
  isMeeting?: boolean;
  meetingTime?: string;
  meetingConflicts?: string;
  isExternal?: boolean;
  category: 'Today' | 'Yesterday' | 'Last week';
}

const emailsData: Email[] = [
  {
    id: '1',
    sender: 'C&D Culture Team',
    initials: 'CT',
    avatarColor: 'bg-green-600',
    subject: 'Recenter: A Modern Yoga...',
    preview: 'Join the meeting now Meeting ID: 221 ...',
    time: '1:13 PM',
    date: 'Today',
    isRead: false,
    isMeeting: true,
    meetingTime: 'Thu 7/3/2025 12:00 ...',
    meetingConflicts: 'No conflicts',
    category: 'Today' as const,
  },
  {
    id: '2',
    sender: 'Figma',
    initials: 'F',
    avatarColor: 'bg-red-500',
    subject: 'We\'ve updated our Terms of...',
    preview: 'CAUTION:- External Mail.',
    time: '4:33 AM',
    date: 'Today',
    isRead: true,
    isExternal: true,
    category: 'Today' as const,
  },
  {
    id: '3',
    sender: 'KK',
    initials: 'KK',
    avatarColor: 'bg-blue-500',
    subject: 'ACTION REQUIRED: Mee...',
    preview: 'New monthly mailer for client engage...',
    time: 'Mon 7:24 PM',
    date: 'Yesterday',
    isRead: true,
    category: 'Yesterday' as const,
  },
  {
    id: '4',
    sender: 'Prasad Maladkar, Mia Abendan, +1 other',
    initials: 'P',
    avatarColor: 'bg-purple-500',
    subject: 'Ascendion Daily Digest',
    preview: 'CAUTION:- External Mail.',
    time: 'Mon 6:44 PM',
    date: 'Yesterday',
    isRead: true,
    isExternal: true,
    category: 'Yesterday' as const,
  },
  {
    id: '5',
    sender: 'Frontdesk Hyderabad',
    initials: 'FH',
    avatarColor: 'bg-gray-500',
    subject: 'Admin Update >> Tran...',
    preview: 'Dear Ascenders, I hope this message fi...',
    time: 'Mon 10:58 AM',
    date: 'Yesterday',
    isRead: true,
    category: 'Yesterday' as const,
  },
];

const EmailItem: React.FC<{ email: Email; isSelected: boolean; onSelect: (id: string) => void; }> = ({ email, isSelected, onSelect }) => (
  <div
    onClick={() => onSelect(email.id)}
    className={cn(
      'flex gap-3 items-start p-3 border-l-4 cursor-pointer',
      isSelected ? 'bg-accent border-primary' : 'border-transparent hover:bg-muted/50',
      !email.isRead && 'font-bold'
    )}
  >
    <Checkbox id={`check-${email.id}`} className="mt-1" />
    <Avatar className="h-10 w-10">
      <AvatarFallback className={cn('text-white', email.avatarColor)}>{email.initials}</AvatarFallback>
    </Avatar>
    <div className="flex-1 overflow-hidden">
      <div className="flex justify-between items-baseline">
        <p className={cn('truncate', isSelected ? 'text-accent-foreground' : 'text-foreground')}>{email.sender}</p>
        <p className="text-xs text-muted-foreground whitespace-nowrap pl-2">{email.time}</p>
      </div>
      <p className={cn('truncate', isSelected ? 'text-accent-foreground' : 'text-foreground')}>{email.subject}</p>
      <p className={cn('truncate text-sm', isSelected ? 'text-muted-foreground' : 'text-muted-foreground')}>{email.preview}</p>
      {email.isMeeting && (
        <div className="mt-2 flex justify-between items-center bg-card p-2 rounded-md">
          <div>
            <p className="text-sm font-medium">{email.meetingTime}</p>
            <p className="text-xs text-muted-foreground">{email.meetingConflicts}</p>
          </div>
          <Button size="sm" className="bg-muted-foreground/20 hover:bg-muted-foreground/30 text-foreground">RSVP</Button>
        </div>
      )}
    </div>
    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button variant="ghost" size="icon" className="h-8 w-8"><Mail className="h-4 w-4"/></Button>
        <Button variant="ghost" size="icon" className="h-8 w-8"><Archive className="h-4 w-4"/></Button>
        <Button variant="ghost" size="icon" className="h-8 w-8"><Trash2 className="h-4 w-4"/></Button>
    </div>
  </div>
);

const EmailList: React.FC = () => {
  const [selectedEmail, setSelectedEmail] = useState<string>('2');

  const renderGroupedEmails = (category: 'Today' | 'Yesterday' | 'Last week') => {
    const filteredEmails = emailsData.filter(e => e.category === category);
    if (filteredEmails.length === 0) return null;

    return (
        <div key={category}>
            <div className="px-3 py-1 text-sm font-medium text-muted-foreground flex items-center gap-2">
                <ChevronDown className="h-4 w-4" /> {category}
            </div>
            {filteredEmails.map(email => (
                <div key={email.id} className="group">
                    <EmailItem email={email} isSelected={selectedEmail === email.id} onSelect={setSelectedEmail} />
                </div>
            ))}
        </div>
    )
  }

  return (
    <div className="flex flex-col h-full bg-card/50 border-r border-border">
      <div className="p-2 border-b border-border">
        <Tabs defaultValue="focused">
          <div className="flex justify-between items-center">
            <TabsList className="bg-transparent p-0">
              <TabsTrigger value="focused" className="data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4">Focused</TabsTrigger>
              <TabsTrigger value="other" className="data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-4">Other</TabsTrigger>
            </TabsList>
            <Button variant="ghost" size="icon">
              <ArrowDownUp className="h-4 w-4" />
            </Button>
          </div>
        </Tabs>
      </div>
      <div className="flex-1 overflow-y-auto">
        {renderGroupedEmails('Today')}
        {renderGroupedEmails('Yesterday')}
        {/* You can add more categories here */}
      </div>
    </div>
  );
};

// Dummy ChevronDown icon for standalone compilation
const ChevronDown: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m6 9 6 6 6-6"/></svg>
);

export default EmailList;
