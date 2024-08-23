import { FaClinicMedical, FaRegEye } from "react-icons/fa";
import { FaUserShield, FaUserTag, FaTags, FaUsersGear, FaUserSecret } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";
import { useParams } from "react-router-dom";

interface NavbarLinkProps {
    page: string;
}

export interface NavbarLink {
    name: string;
    link: string;
    icon: React.ReactElement;
}

export const NavbarLinks = ({ page }: NavbarLinkProps): NavbarLink[] => {
    const { clinicId, branchId } = useParams();
    switch (page) {
        case 'Administrator':
            return [
                // {
                // name: 'User Administrator',
                // link: '/administrator',
                // icon: <FaUserShield />
                // },
                // {
                // name: 'User Roles',
                // link: '/AdminRoles',
                // icon: <FaUserTag />
                // },
                // {
                // name: 'Job Titles',
                // link: '/JobTitles',
                // icon: <FaTags />
                // },
                // {
                // name: 'Manage Administrator',
                // link: '/AdminMasterList',
                // icon: <FaUsersGear />
                // },
                // {
                // name: 'System Administrator',
                // link: '/administrator',
                // icon: <FaUserSecret />
                // },
                // {
                // name: 'System Roles',
                // link: '/AdministratorRoles',
                // icon: <FaUserTag />
                // },
                {
                    name: 'Branches',
                    link: '/branches',
                    icon: <FaClinicMedical />
                },
                {
                    name: 'General Patient',
                    link: `/clinic/${clinicId}/patients/list/${branchId}`,
                    icon: <MdHealthAndSafety />
                },
                {
                    name: 'Optical',
                    link: `/optic/${clinicId}/optical/list/${branchId}`,
                    icon: <FaRegEye />
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
