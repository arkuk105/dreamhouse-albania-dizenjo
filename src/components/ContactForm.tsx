
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Emri duhet të ketë të paktën 2 karaktere' }),
  email: z.string().email({ message: 'Email-i nuk është i vlefshëm' }),
  phone: z.string().min(6, { message: 'Numri i telefonit nuk është i vlefshëm' }),
  message: z.string().min(10, { message: 'Mesazhi duhet të ketë të paktën 10 karaktere' }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form data:', data);
      toast.success('Faleminderit! Mesazhi juaj u dërgua me sukses.');
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Emri i plotë</FormLabel>
              <FormControl>
                <Input placeholder="Emri juaj i plotë" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="adresa@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Numër telefoni</FormLabel>
                <FormControl>
                  <Input placeholder="+355 6X XXX XXXX" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mesazhi juaj</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Shkruani mesazhin tuaj këtu..." 
                  className="min-h-32"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="bg-furniture-forest hover:bg-furniture-navy w-full md:w-auto px-8"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Duke dërguar...' : 'Dërgo mesazhin'}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
