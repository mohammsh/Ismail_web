import { GanttChartSquare, Blocks, Gem, Bug, BugOff, ClipboardEdit, LockIcon, ComputerIcon, LucideComputer } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const servicesData = [
  {
    icon: <GanttChartSquare size={60} strokeWidth={0.8} />,
    title: 'Security Operations',
    description:
      'Deals with the day-to-day activities that protect an organization’s information. It includes incident response, monitoring, and managing the security of ongoing operations.',
  },
  {
    icon: <LockIcon size={60} strokeWidth={0.8} />,
    title: 'Identity and access management',
    description:
      'Covers the processes and technologies for managing user identities and controlling access to information. It involves authentication, authorization, and account management.',
  },
  {
    icon: <Gem size={60} strokeWidth={0.8} />,
    title: 'Security architecture and engineering',
    description:
      'Focuses on designing secure systems and infrastructure. Topics include security models, cryptography, hardware, and software security controls.'
  },
  {
    icon: <Bug size={60} strokeWidth={0.8} />,
    title: 'Software development security',
    description:
      'Focuses on integrating security into the software development lifecycle. It includes secure coding practices, software vulnerabilities, and secure application design.'
  },
  {
    icon: <ClipboardEdit size={60} strokeWidth={0.8} />,
    title: 'Security and risk management',
    description:
      'Focuses on governance, risk management, compliance, and establishing security policies. It covers legal, regulatory, and ethical aspects of information security.'
  },
  {
    icon: <LucideComputer size={60} strokeWidth={0.8} />,
    title: 'Asset Security',
    description:
      'Deals with the protection of data, information, and assets throughout their lifecycle. It includes classification, ownership, privacy, and data retention.'
  },
  {
    icon: <Blocks size={60} strokeWidth={0.8} />,
    title: 'Communication and Network Security',
    description:
      'Focuses on securing network architecture, transmission channels, and network components. It includes technologies such as VPNs, firewalls, and intrusion detection/prevention systems.'
  },
  {
    icon: <BugOff size={60} strokeWidth={0.8} />,
    title: 'Security Assessment and Testing',
    description:
      'Focuses on evaluating the security posture of systems and networks through testing and assessments. This includes vulnerability assessments, audits, and penetration testing.'
  },
];

const Services = () => {
  return (
    <section className='mb-12 xl:mb-36'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>
          Cyber Security
        </h2>
        {/* grid items */}
        <div className='grid xl:grid-cols-8 justify-center gap-y-4 xl:gap-y-8 xl:gap-x-4'>
          {servicesData.map((item, index) => {
            return (
              <Card
                className='w-full max-w-[200px] h-[500px] flex flex-col pt-4 pb-4 justify-start items-center relative'
                key={index}
              >
                <CardHeader className='text-primary absolute -top-[60px]'>
                  <div className='w-[40px] h-[50px] bg-white dark:bg-background flex justify-center items-center'>
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className='text-center'>
                  <CardTitle className='mb-4 text-lg'>{item.title}</CardTitle>
                  <CardDescription className='text-base'>
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
