export type Tab = {
  label: string;
};

export type headerProps = {
  patientInfoTabs: {
    tabs: Tab[];
  };
};

export type tabSelectedProps = {
  patientInfoTabs: {
    tabSelected: number;
  };
};
