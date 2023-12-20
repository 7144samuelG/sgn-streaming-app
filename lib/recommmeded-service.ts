import { getSelf } from "./auth-user";
import { db } from "./db"

export const getRecommended = async () => {
    let userId;

  try {
    const self = await getSelf();
    userId = self.id;
  } catch {
    userId = null;
  }
  let users = [];

  if (userId) {
    users = await db.user.findMany({
        where: {
          AND: [
            {
              NOT: {
                id: userId,
              },
            },
            {
              NOT: {
                folloedBy: {
                  some: {
                    followerId: userId,
                  },
                },
              },
            },
            {
              NOT:{
                blocking: {
                  some: {
                    blockedId: userId,
                  },
                },
              }
            }
          ],
            },
  
        orderBy:{
            createdAt:"desc"
        }
    })
    
}else{
    users = await db.user.findMany({
        orderBy:{
            createdAt:"desc"
        }
    })
}
return users
}