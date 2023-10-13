import { ImageSourcePropType } from "react-native";

export interface PostDataI {
  reactionEmoji: string;
  name: string;
  userImage: ImageSourcePropType;
  postTime: string;
  isEdited: boolean;
  comments: number;
  postContent: string;
}

export const POSTS_DATA = [
  {
    id: 1,
    name: "Theresa Webb",
    userImage: require("./assets/images/Ellipse2.png"),
    postTime: "2023-10-13T15:45:30.123456",
    isEdited: false,
    reactionEmoji: "👋",
    comments: 24,
    postContent:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit. Exercitationveniam consequat sunt nostrud amet.",
  },
  {
    id: 2,
    name: "Marvin McKinney",
    userImage: require("./assets/images/Ellipse3.png"),
    postTime: "2023-10-12T15:45:30.123456Z",
    isEdited: true,
    reactionEmoji: "😞",
    comments: 24,
    postContent:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit. Exercitationveniam consequat sunt nostrud amet.",
  },
];
