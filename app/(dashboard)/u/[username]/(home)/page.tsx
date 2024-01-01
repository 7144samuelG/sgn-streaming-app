
import { StreamPlayer } from "@/components/stream-player";
import { getUserByUsername } from "@/lib/user-service";
import { UserButton, currentUser } from "@clerk/nextjs";
interface CreatorPageProps {
  params: {
    username: string;
  };
};
 const CreatorPage = async ({
  params,
}: CreatorPageProps) => {
  const externalUser = await currentUser();
  const user = await getUserByUsername(params.username);

  if (!user || user.externlUserId !== externalUser?.id || !user.stream) {
    throw new Error("Unauthorized");
  }

  return ( 
    <div className="h-full">
      <StreamPlayer
        user={user}
        stream={user.stream}
        isFollowing
      />
    </div>
  );
}
 
export default CreatorPage;