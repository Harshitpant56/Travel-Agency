import { Outlet, redirect } from "react-router";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { NavItems } from "components";
import MobileSidebar from "components/MobileSidebar";
import { account } from "~/appwrite/client";
import { getExistingUser, storeUserData } from "~/appwrite/auth";

export async function rootLoader() {
  try {
    const user = await account.get();

    if (user?.$id) {
      const existing = await getExistingUser(user.$id);
      if (!existing) {
        console.log("🚀 Creating new user...");
        await storeUserData();
      }
    }

    return null;
  } catch (error) {
    console.log("Not logged in");
    return null;
  }
}
const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <MobileSidebar />
      <aside className="w-full max-w-[270px] hidden lg:block">
        <SidebarComponent width={270} enableGestures={false}>
          <NavItems />
        </SidebarComponent>
      </aside>
      <aside className="children">
        <Outlet />
      </aside>
    </div>
  );
};

export default AdminLayout;
