import { Check, X } from 'lucide-react';

interface PackageFeatures {
  [key: string]: boolean;
}

interface Package {
  name: string;
  description: string;
  perfectFor: string;
  features: PackageFeatures;
}

interface ComparisonTableProps {
  packageDetails: Package[];
  allFeatures: string[];
}

export default function ComparisonTable({ packageDetails, allFeatures }: ComparisonTableProps) {
  return (
    <div className="bg-white rounded-lg sm:rounded-xl mt-8 sm:mt-10 shadow-lg border-2 border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 border-b-2 border-gray-200">
            <tr>
              <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-900 min-w-[200px] sm:min-w-[250px] md:min-w-[300px] sticky left-0 bg-slate-50 z-10">
                Features
              </th>
              {packageDetails.map((pkg, index) => (
                <th key={index} className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center min-w-[100px] sm:min-w-[120px] md:min-w-[140px]">
                  <div className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                    {pkg.name}
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-600 mt-1">
                    {pkg.description}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {allFeatures.map((feature, index) => (
              <tr key={index} className="hover:bg-slate-50 transition-colors">
                <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700 sticky left-0 bg-white z-10">
                  {feature}
                </td>
                {packageDetails.map((pkg, pkgIndex) => (
                  <td key={pkgIndex} className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center">
                    {pkg.features[feature] ? (
                      <div className="flex justify-center">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#ed1651]" />
                      </div>
                    ) : (
                      <div className="flex justify-center">
                        <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}