import { BloodtypeOutlined, DashboardOutlined, PeopleOutline, ReportOutlined } from "@mui/icons-material";

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: DashboardOutlined,
    label: "Dashboard",
  },
  {
    title: "Patient",
    href: "/patient",
    icon: PeopleOutline,
    label: "Patient",
  },
  {
    title: "Blood Bank",
    href: "/blood-bank",
    icon: BloodtypeOutlined,
    label: "Blood Bank",
  },
  {
    title: "Certificate",
    href: "/certificate",
    icon: ReportOutlined,
    label: "Certificate",
  },
];

export { navItems };
