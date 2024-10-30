import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface BookModalProps {
  title: string;
  description: string;
}

export function BookModal({ title, description }: BookModalProps) {
  return (
    <AlertDialog >
      <AlertDialogTrigger asChild>
        <div className="flex transition-transform transform hover:scale-105 hover:shadow-sm hover:shadow-orange-500/50
 justify-center">
          <Button variant="default">View Details</Button>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-orange-600 font-bold text-md">{title}</AlertDialogTitle>
          <AlertDialogDescription  className=" font-bold text-md">{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel  className="bg-orange-600 transition-transform transform hover:scale-105 hover:shadow-sm hover:shadow-orange-500/50
 text-white font-bold">Go back to Catalog</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
