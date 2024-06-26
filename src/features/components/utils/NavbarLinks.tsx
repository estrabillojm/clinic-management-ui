import { FaClinicMedical, FaRegEye } from "react-icons/fa";
import { FaUserShield, FaUserTag, FaTags, FaUsersGear, FaUserSecret } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";

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
                link: '/administrator',
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
                link: '/administrator',
                icon: <FaUserSecret />
                },
                {
                name: 'System Roles',
                link: '/AdministratorRoles',
                icon: <FaUserTag />
                },
                {
                    name: 'Optical',
                    link: '/branches',
                    icon: <FaRegEye />
                },
                {
                    name: 'General Patient',
                    link: '/branches',
                    icon: <MdHealthAndSafety />
                },
                {
                    name: 'Branches',
                    link: '/branches',
                    icon: <FaClinicMedical />
                },
        ];
        default:
            return [{
                name: 'User Administrator',
                link: '/administrator',
                icon: <FaUserShield />
            }]
    }
};
