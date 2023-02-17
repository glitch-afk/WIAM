import React from "react"
import { signIn } from "next-auth/react"

const UserAuthForm = () => {
  return (
    <div>
      <button
        onClick={() =>
          signIn("google", {
            callbackUrl: "/projects",
          })
        }
      >
        Sign In
      </button>
    </div>
  )
}

export default UserAuthForm
