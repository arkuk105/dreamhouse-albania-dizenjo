
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const TeamInfo = () => {
  const teamMembers = [
    {
      name: 'Ervis Doda',
      position: 'Pronar',
      description: 'Me mbi 15 vjet përvojë në industrinë e mobilieve, Ervis sjell pasion dhe vizion për çdo projekt të DreamHouse.',
      image: '/placeholder.svg'
    },
    {
      name: 'Elidon Gjuni',
      position: 'Specialist Prodhimi',
      description: 'Elidon është mjeshtër në detaje dhe siguron që çdo mobilje të jetë e ndërtuar me precizion dhe cilësi të lartë.',
      image: '/placeholder.svg'
    }
  ];

  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-furniture-navy mb-8 text-center">Ekipi Ynë</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {teamMembers.map((member, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="aspect-[3/2] overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-furniture-navy">{member.name}</CardTitle>
              <CardDescription className="text-furniture-forest font-medium">
                {member.position}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{member.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TeamInfo;
