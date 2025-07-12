import { MaterialCommunityIcons } from "@expo/vector-icons";

export type IconType = keyof typeof MaterialCommunityIcons.glyphMap | undefined;

export type ListingProps = {
    listing: {
        id: number;
        title: string;
        price: number;
        images: {
            url: string;
            thumbnailUrl: string;
        }[];
    }
};
