import { random } from "@/utils/random";

type ClientType = {
  id: string;
  fullName?: string;
  message: string;
};

export const clients: ClientType[] = [
  {
    id: random.strongId(),
    fullName: "Djimi",
    message:
      "Aissa have a fine and meticulous work ethic, and he is a person who loves his work.",
  },
  {
    id: random.strongId(),
    fullName: "Soufiane The Great",
    message:
      "Really good working with him. Takes feedback well and is quick to update mistakes!",
  },
  {
    id: random.strongId(),
    message:
      "Literally an artist. Every new feature he adds, he gets creative with it.",
  },
  {
    id: random.strongId(),
    message: "Aissa is a master of his work.",
  },
];
