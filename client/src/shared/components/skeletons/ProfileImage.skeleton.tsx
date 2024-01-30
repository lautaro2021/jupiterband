import { Skeleton } from "@mui/material";
import { PALETTE } from "../../theme/theme";

function SkeletonProfileImage({ size }: { size: "sm" | "md" }) {
    const skeletonSize = size === "sm" ? 38 : 132;

    return (
        <Skeleton
            variant="circular"
            width={skeletonSize}
            height={skeletonSize}
            sx={{ backgroundColor: `${PALETTE.lightGrey}` }}
            animation="wave"
        />
    );
}

export default SkeletonProfileImage;
