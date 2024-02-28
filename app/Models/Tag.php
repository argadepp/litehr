<?php

namespace App\Models;

use App\Concerns\HasFilter;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Tag extends Model
{
    use HasFilter;

    protected $guarded = [];

    protected $primaryKey = 'id';

    protected $table = 'tags';

    protected $casts = [];

    protected $with = [];

    protected function name(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => Str::toWord($value),
            set: fn ($value) => Str::slug($value),
        );
    }

    public function contacts()
    {
        return $this->morphedByMany(Contact::class, 'taggable');
    }
}
