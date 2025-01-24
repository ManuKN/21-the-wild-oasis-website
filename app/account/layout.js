import SideNavigation from "../_components/SideNavigation";

export default function layout({ children }) {
    return <div className="grid grid-cols-[16rem_1fr] gap-2 h-full">
        <div><SideNavigation /></div>
        <div className="pl-8">{children}</div>
    </div>
}