import { Uuid } from '../../shared/domain/value-objects/uuid_vo'
import { Category } from '../category.entity'

describe('Category Entity Unit Tests', () => {
  describe('constructor()', () => {
    it('should create category only name', () => {
      const category = new Category({
        name: 'Movie',
      })
      expect(category.category_id).toBeInstanceOf(Uuid)
      expect(category.name).toBe('Movie')
      expect(category.description).toBeNull()
      expect(category.is_active).toBe(true)
      expect(category.created_at).toBeInstanceOf(Date)
    })

    it('should create category with all values', () => {
      const created_at = new Date()
      const category = new Category({
        name: 'Movie',
        description: 'New Description',
        is_active: false,
        created_at,
      })
      expect(category.category_id).toBeInstanceOf(Uuid)
      expect(category.name).toBe('Movie')
      expect(category.description).toBe('New Description')
      expect(category.is_active).toBe(false)
      expect(category.created_at).toBe(created_at)
    })

    it('should create category with name and description', () => {
      const category = new Category({
        name: 'Movie',
        description: 'New Description',
      })
      expect(category.category_id).toBeInstanceOf(Uuid)
      expect(category.name).toBe('Movie')
      expect(category.description).toBe('New Description')
      expect(category.is_active).toBe(true)
      expect(category.created_at).toBeInstanceOf(Date)
    })
  })

  describe('category_id field', () => {
    const arrange = [
      { category_id: null },
      { category_id: undefined },
      { category_id: new Uuid() },
    ]
    test.each(arrange)('should if category_id is %j', ({ category_id }) => {
      const category = new Category({
        name: 'Movie',
        category_id: category_id as any,
      })
      expect(category.category_id).toBeInstanceOf(Uuid)
      if (category_id instanceof Uuid) {
        expect(category.category_id).toBe(category_id)
      }
    })
  })

  describe('create command', () => {
    it('should create a category', () => {
      const category = Category.create({
        name: 'Movie',
      })
      expect(category.category_id).toBeInstanceOf(Uuid)
      expect(category.name).toBe('Movie')
      expect(category.description).toBeNull()
      expect(category.is_active).toBe(true)
      expect(category.created_at).toBeInstanceOf(Date)
    })

    it('should create a category with description', () => {
      const category = Category.create({
        name: 'Movie',
        description: 'Movie description',
      })
      expect(category.category_id).toBeInstanceOf(Uuid)
      expect(category.name).toBe('Movie')
      expect(category.description).toBe('Movie description')
      expect(category.is_active).toBe(true)
      expect(category.created_at).toBeInstanceOf(Date)
    })

    it('should create a category with is_active', () => {
      const category = Category.create({
        name: 'Movie',
        description: 'Movie description',
        is_active: false,
      })
      expect(category.category_id).toBeInstanceOf(Uuid)
      expect(category.name).toBe('Movie')
      expect(category.description).toBe('Movie description')
      expect(category.is_active).toBe(false)
      expect(category.created_at).toBeInstanceOf(Date)
    })
  })

  describe('change command', () => {
    it('should change name', () => {
      const category = Category.create({
        name: 'Movie',
      })
      category.changeName('Movie 2')
      expect(category.name).toBe('Movie 2')
    })

    it('should change description', () => {
      const category = Category.create({
        name: 'Movie',
        description: 'Movie description',
      })
      category.changeDescription('Movie description 2')
      expect(category.description).toBe('Movie description 2')
    })

    it('should change is_active', () => {
      const category = Category.create({
        name: 'Movie',
        description: 'Movie description',
        is_active: false,
      })
      category.activate()
      expect(category.is_active).toBe(true)
    })
  })
})
