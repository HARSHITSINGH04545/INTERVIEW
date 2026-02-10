import { SignedOut ,SignedIn, UserButton, SignInButton, SignOutButton} from '@clerk/clerk-react'
import React from 'react'
import toast from 'react-hot-toast'

export default function HomePage() {
  return (
    <div>
        <button className='btn btn-secondary' onClick={()=>(toast.success("Tihs is a success toast"))}>click me</button>
     <SignedOut>
        <SignInButton mode="modal">
            <button>
                Login
            </button>
        </SignInButton>
     </SignedOut>
     <SignedIn>
<SignOutButton/>

     </SignedIn>
     <UserButton/>
    </div>
  )
}
