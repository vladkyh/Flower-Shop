import { useRouter } from "next/router";
import { useEffect } from "react";
const Error = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 1000);
  }, [router])
  return (
    <>
        <div>ошибочка...</div>
    </>
  );
}
export default Error;
