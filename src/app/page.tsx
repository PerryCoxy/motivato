import { Heading } from "@/components/ui/Heading";
import UserCard from "@/components/ui/UserCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Heading title='Здесь пока ничего нет' />
      <div className="users">
        <UserCard name={"user 1"}/>
        <UserCard name={"user 2"}/>
        <UserCard name={"user 3"}/>
        <UserCard name={"user 4"}/>
        <UserCard name={"user 5"}/>
      </div>
      <div className="result-users">

      </div>
    </main>
  );
}
