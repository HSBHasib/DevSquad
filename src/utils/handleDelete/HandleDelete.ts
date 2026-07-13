import toast from "react-hot-toast";
import { DBDeleteResponse } from "../DBResponce";

interface DeleteOptions {
  id: string;
  name: string;
  entityType: string;
  deleteAction: (id: string) => Promise<DBDeleteResponse>;
}

export const handleDelete = async ({
  id,
  name,
  entityType,
  deleteAction,
}: DeleteOptions) => {
  if (!id) {
    toast.error(`Invalid ${entityType} ID`);
    return;
  }

  const toastId = toast.loading(`Deleting "${name}"...`);

  try {
    const result = await deleteAction(id);

    if (result) {
      toast.success(`"${name}" deleted successfully!`, { id: toastId });
      window.location.reload();
    } else {
      toast.error(`Failed to delete ${entityType.toLowerCase()}.`, {
        id: toastId,
      });
    }
  } catch (error) {
    console.error(`${entityType} delete error:`, error);
    toast.error("Something went wrong.", { id: toastId });
  }
};
