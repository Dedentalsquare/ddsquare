import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignUp() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-20 px-4 bg-slate-50 dark:bg-slate-950/50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-10 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob" />
      <div className="absolute top-40 left-10 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000" />
      
      <Card className="w-full max-w-lg relative z-10 shadow-xl border-slate-200/60 dark:border-slate-800 backdrop-blur-xl bg-white/95 dark:bg-slate-950/95">
        <CardHeader className="space-y-3 pb-6 text-center">
          <CardTitle className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            Create an account
          </CardTitle>
          <CardDescription className="text-slate-500 text-base">
            Join Dental Square to manage your appointments easily.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-slate-700 dark:text-slate-300">First Name</Label>
              <Input id="firstName" placeholder="John" className="h-11 bg-slate-50/50 dark:bg-slate-900/50" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-slate-700 dark:text-slate-300">Last Name</Label>
              <Input id="lastName" placeholder="Doe" className="h-11 bg-slate-50/50 dark:bg-slate-900/50" required />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-slate-700 dark:text-slate-300">Email Address</Label>
            <Input id="email" type="email" placeholder="hello@example.com" className="h-11 bg-slate-50/50 dark:bg-slate-900/50" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-slate-700 dark:text-slate-300">Password</Label>
            <Input id="password" type="password" required className="h-11 bg-slate-50/50 dark:bg-slate-900/50" placeholder="Create a password" />
          </div>

          <div className="flex items-center space-x-2 pt-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-600 dark:text-slate-400"
            >
              I agree to the <Link href="#" className="text-blue-600 hover:underline">Terms of Service</Link> and <Link href="#" className="text-blue-600 hover:underline">Privacy Policy</Link>.
            </label>
          </div>

          <Button className="w-full h-11 bg-blue-600 hover:bg-blue-700 text-white font-semibold tracking-wide transition-all active:scale-[0.98] mt-4">
            Sign Up
          </Button>
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-slate-950 text-slate-500">Or continue with</span>
            </div>
          </div>
          
          <Button variant="outline" className="w-full h-11 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 border-slate-200 dark:border-slate-800">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Google
          </Button>
        </CardContent>
        <CardFooter className="flex justify-center border-t border-slate-100 dark:border-slate-800 pt-6 pb-2">
          <div className="text-sm text-slate-500 dark:text-slate-400">
            Already have an account?{" "}
            <Link href="/signin" className="text-blue-600 hover:text-blue-500 font-semibold transition-colors">
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
