import { requireRole } from "@/lib/core/session";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = async ({ children }: AdminLayoutProps ) => {
  await requireRole("admin");
  return <>{children}</> ;
};

export default AdminLayout;