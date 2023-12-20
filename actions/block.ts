"use server"
import { getSelf } from "@/lib/auth-user";
import { blockUser, isBlockedByUser, unblockUser } from "@/lib/block-service";
import { revalidatePath } from "next/cache";

export const onBlock = async (id: string) => {
    const self = await getSelf();
    const blockedUser=await blockUser(id);
      if(blockedUser){
        revalidatePath(`/${blockedUser.blocked.username}`);
      }
      return blockedUser
}  
export const onUnblock = async (id: string) => {
    const self = await getSelf();
    const unblockedUser = await unblockUser(id);
    revalidatePath("/")
    if(unblockedUser){

        revalidatePath(`/${unblockedUser.blocked.username}`);
    }
    return unblockedUser;
  };