import React from "react"

const OnboardingLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="w-full px-[1.5rem] xl:px-0 xl:container md:mx-auto max-w-8xl">
      {children}
    </div>
  )
}

export default OnboardingLayout
