import Image from 'next/image';

interface SpecRow {
  label: string;
  values: (string | { text: string; statusType: 'available' | 'upcoming' | 'rumored' })[];
}

interface Competitor {
  id: string;
  name: string;
  price: string;
  status: 'Available' | 'Upcoming';
  image: string;
}

export default function GeneralSpecsWithCompetitors() {
  // Table Data
  const specs: SpecRow[] = [
    {
      label: 'Brand',
      values: ['Apple', 'Tecno', 'ZTE'],
    },
    {
      label: 'Model',
      values: ['iPhone 16 Pro Max', 'Tecno Pova 5G', 'nubia Z60 Ultra (2024)'],
    },
    {
      label: 'Device Type',
      values: ['Smartphone', 'Smartphone', 'Smartphone'],
    },
    {
      label: 'Release Date',
      values: ['20 September 2024', 'Exp. 27 December 2021', 'Not announced yet'],
    },
    {
      label: 'Status',
      values: [
        { text: 'Available', statusType: 'available' },
        { text: 'Upcoming', statusType: 'upcoming' },
        { text: 'Rumored', statusType: 'rumored' },
      ],
    },
  ];

  // Competitors Sidebar Data
  const competitors: Competitor[] = [
    {
      id: '1',
      name: '5star BD150',
      price: '৳ 1230.00',
      status: 'Available',
      image: '/5star-bd150.png',
    },
    {
      id: '2',
      name: '5star BD17 Pro',
      price: '৳ 1325.00',
      status: 'Available',
      image: '/5star-bd17.png',
    },
    {
      id: '3',
      name: '5star BD20',
      price: '৳ 1190.00',
      status: 'Available',
      image: '/5star-bd20.png',
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-4 font-sans text-gray-700 bg-white">
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Left Column: General Specs Table */}
        <div className="flex-1 border border-gray-200 rounded-sm shadow-sm overflow-hidden">
          {/* Section Header */}
          <div className="border-b-2 border-red-500/80 px-4 py-3 bg-white">
            <h2 className="text-base font-bold text-red-600 uppercase tracking-wide">
              GENERAL
            </h2>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <tbody>
                {specs.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-200 last:border-b-0">
                    {/* Feature Label Column */}
                    <td className="w-1/4 bg-gray-100/70 p-3.5 font-bold text-gray-600 border-r border-gray-200 text-sm">
                      {row.label}
                    </td>

                    {/* Value Columns (3 products) */}
                    {row.values.map((val, valIdx) => (
                      <td
                        key={valIdx}
                        className="w-1/4 p-3.5 border-r border-gray-200 last:border-r-0 text-sm text-gray-600"
                      >
                        {typeof val === 'object' ? (
                          <div className="flex items-center gap-1.5 font-medium">
                            {val.statusType === 'available' && (
                              <svg className="w-4 h-4 text-emerald-600 fill-current" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            )}
                            {(val.statusType === 'upcoming' || val.statusType === 'rumored') && (
                              <svg className="w-4 h-4 text-rose-500 fill-current" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                              </svg>
                            )}
                            <span>{val.text}</span>
                          </div>
                        ) : (
                          <span>{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column: Competitors Sidebar */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Competitors</h2>
          
          <div className="space-y-3">
            {competitors.map((item) => (
              <div
                key={item.id}
                className="p-3 bg-white border border-gray-200 rounded-sm shadow-sm flex items-center justify-between gap-2"
              >
                <div className="flex items-center gap-3">
                  {/* Phone Image */}
                  <div className="relative w-9 h-14 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  {/* Phone Info */}
                  <div>
                    <h3 className="text-xs font-bold text-gray-700">{item.name}</h3>
                    <p className="text-xs font-bold text-blue-600 mt-0.5">{item.price}</p>
                    <p className="text-[11px] text-gray-500 flex items-center gap-1 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                      {item.status}
                    </p>
                  </div>
                </div>

                {/* Compare Button */}
                <button
                  type="button"
                  className="px-3 py-1 text-xs font-semibold text-blue-700 border border-blue-500 rounded-full hover:bg-blue-50 transition-colors whitespace-nowrap"
                >
                  + Compare
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}