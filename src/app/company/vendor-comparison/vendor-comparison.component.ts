import { Component } from '@angular/core';

@Component({
  selector: 'app-vendor-comparison',
  templateUrl: './vendor-comparison.component.html',
  styleUrls: ['./vendor-comparison.component.css']
})
export class VendorComparisonComponent {
  vendors = [
    {
      name: 'TechNova Solutions',
      rating: 4.5,
      completedProjects: 8,
      ongoingProjects: 3,
      specialization: 'Web & AI Development',
      avgCost: '$15,000',
      feedback: 'Highly reliable and fast communication.'
    },
    {
      name: 'InnoServe Labs',
      rating: 4.2,
      completedProjects: 6,
      ongoingProjects: 2,
      specialization: 'Cloud & Data Analytics',
      avgCost: '$13,000',
      feedback: 'Great technical expertise, slightly delayed timelines.'
    },
    {
      name: 'CodeCrafters Pvt. Ltd.',
      rating: 4.7,
      completedProjects: 10,
      ongoingProjects: 1,
      specialization: 'Mobile App Development',
      avgCost: '$18,000',
      feedback: 'Excellent design quality and documentation.'
    }
  ];

  sortBy = 'rating';

  sortVendors(event: Event) {
    const criteria = (event.target as HTMLSelectElement).value;

    if (criteria === 'rating') {
      this.vendors.sort((a, b) => b.rating - a.rating);
    } else if (criteria === 'completed') {
      this.vendors.sort((a, b) => b.completedProjects - a.completedProjects);
    } else if (criteria === 'cost') {
      this.vendors.sort(
        (a, b) =>
          parseInt(a.avgCost.replace(/\D/g, '')) -
          parseInt(b.avgCost.replace(/\D/g, ''))
      );
    }
  }
}