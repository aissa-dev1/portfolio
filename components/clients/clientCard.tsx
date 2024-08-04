import { Card, CardDescription, CardTitle } from "../ui/card";

export type ClientType = {
  id: string;
  fullName: string;
  message: string;
};

interface Props extends ClientType {}

export default function ClientCard({ fullName, message }: Props) {
  return (
    <Card className="h-52 flex flex-col justify-center gap-4 p-6">
      <CardTitle>{fullName}</CardTitle>
      <CardDescription>{message}</CardDescription>
    </Card>
  );
}
