export type Tab = {
  label: string;
};

export type headerProps = {
  patients: {
    tabs: Tab[];
  };
  optics: {
    tabs: Tab[];
  }
};

export type tabSelectedProps = {
  patients: {
    tabSelected: number;
  };
  optics: {
    tabSelected: number;
  }
};