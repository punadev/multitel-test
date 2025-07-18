import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Swal from 'sweetalert2';

export function Cta() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});

  const services = [
    { title: 'Consulting' },
    { title: 'Infrastructure' },
    { title: 'Connectivity' },
    { title: 'Security' }
  ];

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      Swal.fire({
        title: 'Message sent successfully',
        text: 'Our sales team will contact you shortly',
        icon: 'success',
        confirmButtonColor: '#2b489e'
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
      setErrors({});
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="bg-white rounded-xl p-8 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-6">Talk to a specialist</h2>
            <p className="text-gray-600 mb-8">
              Our team is ready to find the best solution for your company.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-2" /> <a href="tel:244222 204 200">(+244) 222 204 200</a>
              </div>
              <div className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 mr-2" /> <a href="mailto:suporte@multitel.co.ao">suporte@multitel.co.ao</a>
                <Mail className="h-5 w-5 ml-4 mr-2" /> <a href='mailto:vendas@multitel.co.ao'>vendas@multitel.co.ao</a>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2" /> Rua Cristiano dos Santos, nº 5 Bairro Miramar, Distrito Urbano do Sambizanga
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            {[{key: 'name', label: 'Name'}, {key: 'email', label: 'Email'}, {key: 'phone', label: 'Phone'}, {key: 'company', label: 'Company'}].map((field) => (
              <div key={field.key}>
                <input
                  type={field.key === 'email' ? 'email' : 'text'}
                  placeholder={field.label}
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#323196]"
                  value={formData[field.key]}
                  onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                />
                {errors[field.key] && <p className="text-red-500 text-sm">{errors[field.key]}</p>}
              </div>
            ))}
            <div>
              <select
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#1d0dff]"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
              {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#3a2cb3]"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-[#2b489e] text-white py-3 rounded-lg font-medium hover:bg-[#2b7caf] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
