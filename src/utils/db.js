import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qreytuaxmanzmewqhyfu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFyZXl0dWF4bWFuem1ld3FoeWZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2OTExODksImV4cCI6MjA1ODI2NzE4OX0.Um83E-6q97Yi2w9kv5ZLfJuLGMACoPZOS-Sez6W93XE';
const supabase = createClient(supabaseUrl, supabaseKey);

async function vote(id, filePath) {
    // Check if the row with the given `id` already exists
    const { data: existingRow, error: fetchError } = await supabase
        .from('hackverse')
        .select('*')
        .eq('id', id)
        .single();

    if (fetchError && fetchError.code !== 'PGRST116') { // Ignore "No rows found" error
        console.error('Error fetching row:', fetchError);
        return;
    }

    if (existingRow) {
        // If the row exists, update the vote count
        const { error: updateError } = await supabase
            .from('hackverse')
            .update({ votes: existingRow.votes + 1 })
            .eq('id', id);

        if (updateError) {
            console.error('Error updating vote:', updateError);
        }
    } else {
        // If the row doesn't exist, insert a new row with vote = 1 and filePath
        const { error: insertError } = await supabase
            .from('hackverse')
            .insert({ id, votes: 1, filePath });

        if (insertError) {
            console.error('Error inserting vote:', insertError);
        }
    }
}

async function getAllTheVotes() {
    const { data, error } = await supabase.from('hackverse').select();
    if (error) {
        console.error('Error fetching votes:', error);
    }
    return data;
}

async function getTopThree() {
    const { data, error } = await supabase
        .from('hackverse')
        .select('*')
        .order('votes', { ascending: false }) // Sort by votes in descending order
        .limit(3); // Limit to top 3 entries

    if (error) {
        console.error('Error fetching top three:', error);
        return [];
    }

    return data;
}

export { vote, getAllTheVotes, getTopThree };