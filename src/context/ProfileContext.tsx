import { createContext } from "react";
import { ReactNode } from "react"

import { profileData } from "@/data/profile"

type ProfileContextValue = {
  profile: typeof profileData
}

export function ProfileProvider({ children }: { children: ReactNode }) {
  return (
    <ProfileContext.Provider value={{ profile: profileData }}>
      {children}
    </ProfileContext.Provider>
  )
}

const ProfileContext = createContext<ProfileContextValue | undefined >(undefined)

export default ProfileContext

