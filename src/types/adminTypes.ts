export type Tab = {
    label: string;
  };

export type headerProps = {
    adminTabs: {
      tabs: Tab[];
    };
  };

export type tabSelectedProps = {
    adminTabs: {
      tabSelected: number;
    };
  };