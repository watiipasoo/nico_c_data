import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
	'https://dybllrihzokqujmhhuvl.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5Ymxscmloem9rcXVqbWhodXZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU2NDk2MjIsImV4cCI6MjAxMTIyNTYyMn0.TsaPE-ghb-fLcYwH2njcHYCs0YTiTI7AzZ7x2ibYCIY'
);
