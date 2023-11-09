import SignOut from "@/components/sign-out";

export default function Home() {
  return (
    <div className="flex h-screen bg-black">
      <div className="flex flex-col items-center justify-center w-screen h-screen space-y-5">
        <h1>Menu</h1>
        <SignOut />
      </div>
    </div>
  );
}
