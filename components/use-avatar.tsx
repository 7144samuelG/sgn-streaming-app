// import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { cva, type VariantProps } from "class-variance-authority";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { LiveBadge } from "./live-badge";
import { cn } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";
const avatarSizes = cva("", {
  variants: {
    size: {
      default: "h-8 w-8",
      lg: "h-14 w-14",
    },
  },
  defaultVariants: {
    size: "default",
  },
});
interface UserAvatarProps extends VariantProps<typeof avatarSizes> {
  username: string;
  imageUrl: string;
  isLive?: boolean;
  showBadge?: boolean;
}
export const UserAvatar = ({
  username,
  imageUrl,
  isLive,
  showBadge,
  size,
}: UserAvatarProps) => {
    const canShowBadge = showBadge && isLive;
  return (
    <div className="relative">
      <Avatar
        className={cn(
          
          avatarSizes({ size })
        )}
      >
        <AvatarImage src={imageUrl} className={cn("object-cover rounded-full ",avatarSizes({ size }))}  />
        <AvatarFallback>
          {username[0]}
          {username[username.length - 1]}
        </AvatarFallback>
      </Avatar>
      {canShowBadge && (
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
          <LiveBadge />
        </div>
      )}
    </div>
  );
};

interface UserAvatarSkeletonProps 
  extends VariantProps<typeof avatarSizes> {};

export const UserAvatarSkeleton = ({
  size,
}: UserAvatarSkeletonProps) => {
  return (
    <Skeleton className={cn(
      "rounded-full",
      avatarSizes({ size }),
    )} />
  );
  }