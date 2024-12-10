import MultistepForm from "@/components/multistep-form/multistep-form";
// import RegisterForm from "@/components/register-form/register-form";

function Home() {
  return (
    <main className="h-svh bg-blue-400 grid place-items-center">
      <div className="w-[500px] p-8 bg-white rounded shadow-md">
        <MultistepForm />
      </div>
    </main>
  );
}

export default Home;
