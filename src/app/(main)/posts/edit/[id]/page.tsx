"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import BackButton from "@/components/dashboard/back-button";
import { Textarea } from "@/components/ui/textarea";
import posts from "@/data/post";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  title: z.string().min(10, {
    message: "Title must be at least 10 characters.",
  }),
  author: z.string().min(3, {
    message: "Autor must be at least 2 characters.",
  }),
  body: z.string().min(5, {
    message: "Description are required ",
  }),
  date: z.string().min(1, {
    message: "Date is required!",
  }),
});

interface PostEditProps {
  params: {
    id: string;
  };
}

export default function PostEdit({ params }: PostEditProps) {
  const post = posts.find((post) => post.id === params.id);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post?.title || "",
      author: post?.author || "",
      body: post?.body || "",
      date: post?.date || "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Post updated Successfully!",
      description: `the post updated By : ${values.author}`,
    });
    router.push("/posts");
  }

  return (
    <div className="h-screen ">
      <BackButton link="/posts" text="Back" />
      <div className="mx-auto max-w-2xl mt-5">
        <h3 className="text-2xl font-semibold dark:text-white my-5">
          Edit Post
        </h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your post title here"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    some information about inputs
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="body"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your post description here"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    some information about inputs
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Auhtor</FormLabel>
                  <FormControl>
                    <Input placeholder="Sayed murtaza" {...field} />
                  </FormControl>
                  <FormDescription>
                    some information about inputs
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <Input placeholder="2024-04-03" {...field} />
                  </FormControl>
                  <FormDescription>
                    some information about inputs
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              Update Post
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
