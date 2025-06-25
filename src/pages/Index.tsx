import React from 'react';
import SidebarNav from '@/components/EmailOverview/SidebarNav';
import TopHeader from '@/components/EmailOverview/TopHeader';
import EmailList from '@/components/EmailOverview/EmailList';
import EmailPreview from '@/components/EmailOverview/EmailPreview';

/**
 * The main page for the Email Dashboard Clone.
 * This component orchestrates the overall layout, combining the sidebar, header,
 * email list, and email preview into a single, cohesive interface that mimics
 * a modern email client.
 * 
 * The layout is responsive:
 * - On large screens (lg and up), it displays a three-column layout: Sidebar, Email List, and Email Preview.
 * - On smaller screens, the Email Preview is hidden to prioritize the Email List.
 */
const IndexPage: React.FC = () => {
  return (
    <div className="grid h-screen w-full grid-cols-[auto_1fr] bg-background font-sans text-foreground">
      {/* Sidebar Navigation: Fixed-width column defined by its own content (w-64) */}
      <SidebarNav />

      {/* Main Content Area: Flexible column that contains the header and the main email view */}
      <div className="flex flex-col overflow-hidden">
        {/* Top Header: Sticky header with a fixed height */}
        <TopHeader />

        {/* Email Content Grid: Takes up the remaining space and splits into list and preview */}
        <main className="grid flex-1 grid-cols-1 lg:grid-cols-[minmax(400px,_1fr)_2fr] overflow-hidden">
          {/* Email List Column: Contains the list of emails and is always visible. It handles its own scrolling. */}
          <EmailList />

          {/* Email Preview Column: Hidden on screens smaller than 'lg'. It handles its own scrolling. */}
          <div className="hidden h-full flex-col lg:flex">
            <EmailPreview />
          </div>
        </main>
      </div>
    </div>
  );
};

export default IndexPage;
