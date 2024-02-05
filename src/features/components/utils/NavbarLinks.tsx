import { FaUserShield, FaUserTag, FaTags, FaUsersGear, FaUserSecret } from "react-icons/fa6";

interface NavbarLinkProps {
    page: string;
}

export interface NavbarLink {
    name: string;
    link: string;
    icon: React.ReactElement;
}

export const NavbarLinks = ({ page }: NavbarLinkProps): NavbarLink[] => {
    switch (page) {
        case 'Administrator':
            return [
                {
                name: 'User Administrator',
                link: '/Administrator',
                icon: <FaUserShield />
                },
                {
                name: 'User Roles',
                link: '/AdminRoles',
                icon: <FaUserTag />
                },
                {
                name: 'Job Titles',
                link: '/JobTitles',
                icon: <FaTags />
                },
                {
                name: 'Manage Administrator',
                link: '/AdminMasterList',
                icon: <FaUsersGear />
                },
                {
                name: 'System Administrator',
                link: '/Administrator',
                icon: <FaUserSecret />
                },
                {
                name: 'System Roles',
                link: '/AdministratorRoles',
                icon: <FaUserTag />
                },
        ];
        default:
            return [{
                name: 'User Administrator',
                link: '/Administrator',
                icon: <FaUserShield />
            }]
    }
};
